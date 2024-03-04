import { Host } from 'zubox';

const BINGO = new Host(80);

const handleData = (data) => {
  console.log(data());
  return data.data[-1] ? data.data[-1] : 'Nullify Flower :(';
};



export default async function(){
	return BINGO.listen(handleData);
}