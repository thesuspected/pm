package resources

type SubTask struct {
	Id   			int64		`json:"id,string"`
	Name 			string		`json:"value"`
	Task		 	string		`json:"task"`
	Check 			bool		`json:"check"`
}