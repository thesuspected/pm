package resources

type Employee struct {
	Id   			int64		`json:"id,string"`
	LastName 		string		`json:"lastName"`
	FirstName 		string		`json:"firstName"`
	Patronymic 		string		`json:"patronymic"`
	Date 			string		`json:"date"`
	Email			string		`json:"email"`
	ImgSrc			string		`json:"imgSrc"`
	User			string		`json:"user"`
	Position		string		`json:"position"`
	Group			string		`json:"group"`
}