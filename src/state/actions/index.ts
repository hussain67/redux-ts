import { ActionType } from "../action-types";
interface searchRepositoryStartAction {
	type: ActionType.SEARCH_REPOSITORIES_START;
}
interface serchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: string[];
}
interface searchRepositoriesErrorAction {
	type: ActionType.SEARCH_REPOSITORIES_FAIL;
	payload: string;
}
export type Action = searchRepositoryStartAction | serchRepositoriesSuccessAction | searchRepositoriesErrorAction;
