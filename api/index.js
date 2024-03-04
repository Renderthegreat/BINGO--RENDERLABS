import { Host } from 'zubox';

const BINGO = new Host(4000);

const handleData = (data) => {
  console.log(data());
  return data.data ? data.data[-1] : 'Nullify Flower :(';
};



export default async function(){
	BINGO.listen(handleData);
}