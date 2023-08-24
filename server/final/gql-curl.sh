ACCESS_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIjMSIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE2OTI4NDIyMDYsImV4cCI6MTY5MjkyODYwNiwic3ViIjoidXNlciMxIn0.0cC4rL7fQKf_6hyLZCy_FXxKGJUswM7VnQR0M1XsTx0"
DATA='{ "query": "{ users { email id name roles } }", "variables": { "first": "1" } }'

curl \
    -X POST \
    -H "Content-Type: application/json" \
    -H "x-access-token: ${ACCESS_TOKEN}" \
    --data "${DATA}" \
    http://localhost:4000/