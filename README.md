button{
    padding: 0.5em 1em;
    text-align: center;
}

vs 

div{
    display: flex;
    justify-content: center;
    align-content: center;
}

## Results:
#### (all number is 3 times average)

| n of elemets  |    flex     |  padding  |
| ---------     |:-----------:| ---------:|
| 1             |  13.0187ms  |  7.9173ms |
| 10            |  17.4795ms  |   10.16ms |
| 100           |  38.9364ms  | 21.9495ms |
| 1000          | 210.5345ms  | 82.7853ms |
| 10000         | 778.4514ms  | 330.926ms |
| 100000        | 6442.033ms  |  3299.9ms |


## Conclusion

It is almost no chance you will have so much elements of one type, 
but it is obvious that flex implementation is heavier and you should prefer padding + text-align if possible. 
