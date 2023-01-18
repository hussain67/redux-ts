import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
	loading: boolean;
	data: string[];
	error: string | null;
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES_START:
			return {
				...state,
				loading: true
			};
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return {
				...state,
				data: action.payload,
				loading: false
			};
		case ActionType.SEARCH_REPOSITORIES_FAIL:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
