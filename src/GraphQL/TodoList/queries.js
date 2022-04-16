import { gql } from "@apollo/client";

const GET_TODO_LIST = gql`
  query getTodoList {
    todolist(order_by: { id: asc }) {
      id
      title
      is_done
    }
    user {
      id
      name
    }
  }
`;

const GET_TODO_BY_PARAM = gql`
  query getTodo($user_id: Int!, $title: String!) {
    todolist(where: { id_user: { _eq: $user_id }, title: { _ilike: $title } }) {
      id
      title
      is_done
    }
  }
`;

const ADD_TODO = gql`
  mutation insertTodo($objects: [todolist_insert_input!]!) {
    insert_todolist(objects: $objects) {
      returning {
        id
        id_user
        is_done
        title
      }
    }
  }
`;

const UPDATE_TODO_FIELD = gql`
  mutation updateTodoStatus($id: Int!, $update: todolist_set_input) {
    update_todolist_by_pk(pk_columns: { id: $id }, _set: $update) {
      id
      is_done
      title
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: Int!) {
    delete_todolist_by_pk(id: $id) {
      id
      title
      is_done
    }
  }
`;

export {
  GET_TODO_LIST,
  GET_TODO_BY_PARAM,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO_FIELD,
};
