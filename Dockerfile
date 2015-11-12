FROM mozart/grails
MAINTAINER Fran Garcia <fgarciarico@gmail.com>

# Copy code to /app directory
COPY . /app
WORKDIR /app

# Download app dependencies
RUN grails refresh-dependencies

# Use `run-app` instead of image's default run-war.
CMD ["run-app"]
