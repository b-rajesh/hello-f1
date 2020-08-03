# A Simple nodeJS service to get F1 deatail from argast for docker and vm image

## Please use this wisely as I am have integrated to a PHP site(http://ergast.com/mrd/), soon I will introduce mysql/postgres with this service, until then.....

## To create a image for GCP to reference it while deploying through Terraform - You need to install Packer(https://www.packer.io/)
```sh
$ packer build hello-f1-gcp-image.json
```


## Docker build
    docker build -t hello-f1 . no-cache
## Packer build
    packer build hello-f1-gcp-image.json
## Usage
    docker run -p 3000:3000 --rm -t hello-f1

## Test it with httpie
    http :3000/f1-api/f1/drivers.json

## Output would look like this
```
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 5385
Content-Type: application/json; charset=utf-8
Date: Sun, 02 Aug 2020 14:47:30 GMT
ETag: W/"1509-+n/0HQpQgfT2lW15gZg6R3B6mx4"
X-Powered-By: Express

{
    "MRData": {
        "DriverTable": {
            "Drivers": [
                 {
                    "dateOfBirth": "1948-07-04",
                    "driverId": "arnoux",
                    "familyName": "Arnoux",
                    "givenName": "René",
                    "nationality": "French",
                    "url": "http://en.wikipedia.org/wiki/Ren%C3%A9_Arnoux"
                },
                {
                    "dateOfBirth": "1933-11-08",
                    "driverId": "arundell",
                    "familyName": "Arundell",
                    "givenName": "Peter",
                    "nationality": "British",
                    "url": "http://en.wikipedia.org/wiki/Peter_Arundell"
                }
            ]
        },
        "limit": "30",
        "offset": "0",
        "series": "f1",
        "total": "848",
        "url": "http://ergast.com/api/f1/drivers.json",
        "xmlns": "http://ergast.com/mrd/1.4"
    }
}
```

## Other API Calls to test
    http ::3000/f1-api/f1/drivers/alonso
    http ::3000/f1-api/f1/2010/drivers
    http ::3000/f1-api/f1/drivers/alonso

    http ::3000/f1-api/f1/current
    http ::3000/f1-api/f1/2012
    http ::3000/f1-api/f1/current/last/results
