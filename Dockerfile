# ---- Base Node ----
FROM node:10.18-alpine3.11 as build-env
LABEL maintainer "ocular-d<sven@ocular-d.tech>"

# hadolint ignore=DL3018
RUN apk --no-cache add git \
    && mkdir -p /app/website \
    && chown -R node:node /app/website

USER node
WORKDIR /app/website

COPY --chown=node:node package.json /app/website/package.json
COPY --chown=node:node yarn.lock /app/website/yarn.lock
COPY --chown=node:node docs /app/website/docs
COPY .git /app/website/.git

RUN yarn install \
    && yarn docs:build

# ---- Release ----
# Copy static docs to alpine-based nginx container.
#FROM nginx:alpine
FROM nginx:1.17.10-alpine

# Set ownership nginx.pid and cache folder in order to run nginx as non-root user
RUN touch /var/run/nginx.pid && \
    chown -R 101 /var/run/nginx.pid && \
    chown -R 101 /var/cache/nginx

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-env /app/website/docs/.vuepress/dist /usr/share/nginx/html

USER nginx

EXPOSE 8080

