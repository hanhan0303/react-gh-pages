import { useState } from 'react';

const data = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
  },
];

// 使用函式建立，大寫開頭命名
// return JSX
// export default
//原則上函式會跟檔名一致

function RenderDataTable() {
  const [drinks, setDrinks] = useState(data);
  const onDecreaseCount = (id) => {
    const newData = drinks.map((drink) => {
      if (drink.id === id && drink.stock >= 1 ) {
        drink.stock -= 1;
      }
      return drink;
    });
    setDrinks(newData);
  };
  const onAddCount = (id) => {
    const newAry = drinks.map((drink) => {
      if (drink.id === id) {
        drink.stock += 1;
      }
      return drink;
    });
    setDrinks(newAry);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody>
          {drinks.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <small>{item.description}</small>
              </td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => onDecreaseCount(item.id)}>-</button>
                {item.stock}
                <button onClick={() => onAddCount(item.id)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RenderDataTable;
