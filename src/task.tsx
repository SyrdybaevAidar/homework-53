import React  from "react";

interface ITaskProps extends React.PropsWithChildren{
    Name: string;
}
export const Task = (props: ITaskProps) => {
    return <div>
        <p>{props.Name}</p><button>x</button>
    </div>
};