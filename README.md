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

comparing render time



## Results:

| n     |    flex     |  padding  |
| ------|:-----------:| ---------:|
| 1     |  30.1272ms  | 17.5259ms |
| 100   |  38.8999ms  | 26.2708ms |
| 1000  | 111.9160ms  | 63.2383ms |
| 10000 | 705.2390ms  | 300.897ms |
