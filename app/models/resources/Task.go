package resources

type Task struct {
	Id   			int64		`json:"id,string"`
	Name 			string		`json:"text"`
	Description 	string		`json:"description"`
	Date 			string		`json:"date"`
	Priority		string		`json:"color"`
	Status			string		`json:"status"`
	Assign			string		`json:"user_id"`
	Project			string		`json:"project"`
}