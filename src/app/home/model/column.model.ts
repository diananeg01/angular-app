import {NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder} from "ng-zorro-antd/table";
import {MovieModel} from "./movie.model";

export interface ColumnModel {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<MovieModel> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<MovieModel> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}
