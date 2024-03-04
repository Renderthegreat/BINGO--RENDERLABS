import { Client, Host } from 'zubox'

const BINGO = new Host(4000)
BINGO.listen((data)=>{
  console.log(data())
  return data().data[-1]
});
