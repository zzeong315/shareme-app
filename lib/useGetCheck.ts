export default function getUserCheck(id:any, user:number) {
  let array:any[] = []
  id.map((i:any) => array.push(i.userId));
  return array.includes(user);
}