import { useEffect, useState } from "react";
import categories from "../utils/categories";
import axios from "axios";

function Display(props) {
  const [items, setItems] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  const loadData = () => {
    axios
      .get("http://localhost:8080/api/todo")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (props.checkDisplay) {
      loadData();
      props.setCheckDisplay(false);
    }
  }, [props.checkDisplay]);

  const checkItem = (e, item) => {
    e.preventDefault();
    const record = { id: item._id };
    axios
      .delete(`http://localhost:8080/api/todo/${item._id}`)
      .then(() => {
        props.setCheckDisplay(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Todo
              </th>
              <th scope="col" class="px-6 py-3">
                Priority
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only"></span>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td class="px-6 py-4">
                  <img
                    src={
                      categories.find(({ id }) => id === item.category)?.avatar
                    }
                    alt=""
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                  />
                </td>
                <td class="px-6 py-4 text-right">
                  <a
                    href="#"
                    onClick={(e) => checkItem(e, item)}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Tadaaa
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Display;
