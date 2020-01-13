package resources

type User struct {
	Id   		int64		`json:"id,string"`
	Login 		string		`json:"user"`
	Password 	string		`json:"pass"`
}