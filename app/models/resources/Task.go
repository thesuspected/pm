package resources

type Task struct {
	Id   			int64		`json:"id,string"`
	Name 			string		`json:"name"`
	Description 	string		`json:"description"`
	Date 			string		`json:"date"`
	Priority		string		`json:"priority"`
	Status			string		`json:"status"`
	Assign			string		`json:"assign"`
	Project			string		`json:"project"`
}