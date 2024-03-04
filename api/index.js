import { Host } from 'zubox';

const BINGO = new Host(4000);

const handleData = (data) => {
  console.log(data());
  return data().data[-1];
};

BINGO.listen(handleData);

export default handleData;