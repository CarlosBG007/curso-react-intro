import React from "react";
import { TodoIcon } from "../components/TodoIcon.js";

function DeleteIcon({onDelete}) {
    return <TodoIcon onClick={onDelete} type="delete" color="gray" />;
}

export { DeleteIcon };
