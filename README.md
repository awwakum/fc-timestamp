# fc-timestamp
Timestamp Microservice

### demo
https://fcc-timestamp-awwakum.herokuapp.com/

User stories:

- I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp 
        or a natural language date (example: January 1, 2016)
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.
    
### Example usage: 
```sh
https://timestamp-ms.herokuapp.com/December%2015,%202015 
```
```sh
https://timestamp-ms.herokuapp.com/1450137600
```
### Example output: 
```sh
{ "unix": 1450137600, "natural": "December 15, 2015" }
```