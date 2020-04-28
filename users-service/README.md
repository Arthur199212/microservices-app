# users-service

```sh
# Register
curl -v -X POST localhost:4002/api/v1/register -H "Content-Type:application/json" -d "{\"email\":\"SAMPLE\",\"password\":\"SAMPLE\"}"

# Login
curl -v -X POST localhost:4002/api/v1/login -H "Content-Type:application/json" -d "{\"email\":\"SAMPLE\",\"password\":\"SAMPLE\"}"

# Logout
curl -v -X POST localhost:4002/api/v1/logout

# Get User
curl -v -X GET localhost:4002/api/v1/user/:userId

# Email verify
curl -v -X GET -H "Content-Type:application/json" localhost:4002/api/v1/logout -d "{\"id\":\"SAMPLE\",\"token\":\"SAMPLE\",\"expires\":\"SAMPLE\",\"signature\":\"SAMPLE\",\"originalUrl\":\"SAMPLE\"}"

# Email resend
curl -v -X GET -H "Content-Type:application/json" localhost:4002/api/v1/logout -d "{\"email\":\"SAMPLE\"}"
```
