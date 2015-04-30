#Api Documentation

Deployed to http://128.199.200.217:8080 , https to be setup eventually!

For on the fly testing when I myself (Nish) am online you can possibly use https://ogage-audarth.c9.io/


For all methods attach the header:

    Content-Type: application/json
    
For login use 

    post
    /api/login



accepts json with

    {
      "username": "ExampleUsername",
      "password": "ExamplePassword"
    }

For example

    {"username": "boris", "password": "boris"}

returns on invalid username with


    {
      "success": "false",  "message": "Unknown user $USERNAME"
    }

and on invalid password with

    {
      "success": "false",  "message": "Incorrect password"
    }
    

returns on success with


    {
      "success": "true",
      "auth": "$ExampleAuthTokenWhichIsQuiteLongAndFilledWith@lphaNum3ricCharacters"
    }


For all future methods then attach the token prefixed by "Bearer" in the authorization header ie.

    Authorization: Bearer $ExampleAuthTokenWhichIsQuiteLong




TBC.
