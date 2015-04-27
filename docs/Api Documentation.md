**Api Documentation**

rootURL to be determined! 

For on the fly testing when I myself (Nish) am online you can possibly use https://ogage-audarth.c9.io/



```
post

/api/login```



accepts json with

```
{
  "username": "ExampleUsername",
  "password": "ExamplePassword"
}```


returns on failure with

```
{
  "success": "false"
}```


returns on success with

```
{
  "success": "true",
  "auth": "ExampleAuthTokenWhichIsQuiteLongAndFilledWith@lphaNum3ricCharacters"
}```


auth will be required for future api requests after login

TBC.