FROM registry.access.redhat.com/ubi8/nodejs-18 as builder

ADD index.js package.json $HOME

RUN npm install

# Copy the application source and build artifacts from the builder image to this one
FROM registry.access.redhat.com/ubi8/nodejs-18-minimal
COPY --from=builder $HOME $HOME
# Don't run npm here
CMD ["node", "index.js"]
