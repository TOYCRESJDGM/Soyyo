# Soyyo
## Description
Small api that given a range of values between 1 and 20, returns the information such as: name, expiration date, identification number, name and email of the contact, of the entities that are in those values, if given the case that a range of values isn't given or these're not valid, the api will return an error (404) and in case that some of the entities don't have defined the previously mentioned values which are mandatory, it'll also throw an error (400).

## API functionality.
To run it can be done in two ways: download the project and install the packages or use docker to do it.

1. Download the repository with `git clone https://github.com/TOYCRESJDGM/Soyyo`
2. Configure the environment variables whose guide can be found in the .env.example file.
3. Install packages `npm install`
4. And it'll be possible to run the project with `npm start` or `npm run dev (development)`.
5. It'll be possible to run the project with `npm test`.

### With Docker🐙
In the dockerfile file are the specifications to run the api in a docker container.When you have docker and after downloading the repository.

1. Generate the image `docker built -t <container name >`
2. Set the port in which the container will be located. 


 👩‍💻 _** Juan David González - [TOYCRESJDGM](https://github.com/TOYCRESJDGM)_ 👨‍💻
