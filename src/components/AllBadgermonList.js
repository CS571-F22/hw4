import { useContext } from "react";
import { AllBadgermonDataContext } from "../contexts/AllBadgermonDataContext";
import { BadgermonTeamContext } from "../contexts/BadgermonTeamContext";


function AllBadgermonList() {

    const [allBadgermon] = useContext(AllBadgermonDataContext);
    const [team, setTeam] = useContext(BadgermonTeamContext);

    // TODO: Complete this component!

    return <h2>All Badgermon</h2>;
}

export default AllBadgermonList;
