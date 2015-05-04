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
    
for early login testing and and getting user placeholder details use

    get
    /api/restricted

requires the authorisation token and returns some placeholder data eg.

    {
    "name": "foo",
    "message": "hello boris",
        "details":{
        "id": 0,
        "username": "boris",
        "password": "boris",
        "events":[
            {"id": 0, "name": "city2surf", "going": "5", "maybe": "12"…},
            {"id": 1, "name": "dance party", "going": "3", "maybe": "4"…},
            {"id": 2, "name": "pizza and beer", "going": "90", "maybe": "120"…}
        ],
        "iat": 1430723547,
        "exp": 1430741547
        }
    }




TBC.
