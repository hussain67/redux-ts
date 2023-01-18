import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

//Thunk
export const searchRepositories = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES_START
		});
		try {
			const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
				params: {
					text: term
				}
			});

			const names = data.objects.map((result: any) => result.package.name);
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: names
			});
		} catch (err: any) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_FAIL,
				payload: err.message
			});
		}
	};
};
