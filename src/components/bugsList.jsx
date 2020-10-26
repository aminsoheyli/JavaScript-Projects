import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadBugs, getUnresolvedBugs, resolveBug} from "../store/bugs";

const BugsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBugs());
    }, []);

    const bugs = useSelector(getUnresolvedBugs);

    return (
        <ul>
            {bugs.map(bug => (
                <li key={bug.id}>
                    {bug.description}{" "}
                    {!bug.resolved && (
                        <button className="btn btn-info btn-sm m-2" onClick={() => dispatch(resolveBug(bug.id))}>
                            Resolve
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default BugsList;
