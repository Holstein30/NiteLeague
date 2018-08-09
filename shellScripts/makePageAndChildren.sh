#! /bin/bash

# source <script name> <page name in CamelCase> [<child1 name> <child2name> ...]

# $1 

# number of shell arguments

length=$#
echo ${length}
FROMHERE=0
firstPage=$1
firstPageLength=${#1}
echo ${firstPageLength}
echo $firstPage

# make_a_page(){

# }
# convert to ascii code
printf "%d\n" "'Z"
for ((i=FROMHERE; i< "$firstPageLength"; i++))
do
echo "A" | tr '[:upper:]' '[:lower:]'
# echo $i
done

a='hello'
b='world'

a="$a-"
echo "$a"