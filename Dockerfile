FROM mozart/grails
MAINTAINER Fran Garcia <fgarciarico@gmail.com>

# Copy code to /app directory
ADD . /app
WORKDIR /app

# Download app dependencies
RUN grails clean 
#RUN grails refresh-dependencies --non-interactive

# Use `run-app` instead of image's default run-war.
CMD ["run-app"]
