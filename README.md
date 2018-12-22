# PsyCollect UI

## AWS Scripts

### Upload file to S3

```
aws s3 cp ./build/ s3://psycollect-ui/test-upload --recursive
aws s3 rm s3://psycollect-ui/dev/ --recursive
aws s3 cp s3://psycollect-ui/test-upload/ s3://psycollect-ui/dev/ --recursive --acl public-read
```

### Change cloud front source directory

```
 aws cloudfront create-invalidation --distribution-id EDWXBJIFQH0UL --paths '/*'
 ````
