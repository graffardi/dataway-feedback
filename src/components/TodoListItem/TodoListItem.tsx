import React from 'react';

type Props = {
  label: string;
  content: string;
};

const TodoListItem = (props: Props) => {
  const { label, content } = props;

  return (
    <li>
      <h4>
        {label}
      </h4>

      <p>
        {content}
      </p>
    </li>
  );
};

export default TodoListItem;
