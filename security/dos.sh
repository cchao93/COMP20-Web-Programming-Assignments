#!/bin/sh
i=1
while [ $i -lt 100000 ]
do
    content=$(curl --data "username=hacker&score=99999&grid=[]" http://fathomless-plateau-9464.herokuapp.com/submit.json)
    echo $content
    i=$(($i+1))
done
