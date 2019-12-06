package resources

type Project struct {
	Id   	int64		`json:"id,string"`
	Name 	string		`json:"name"`
	Date 	string		`json:"date"`
	Group 	string		`json:"group"`
}
