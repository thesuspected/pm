package resources

type Group struct {
	Id   		int64		`json:"id,string"`
	Name 		string		`json:"name"`
	Date 		string		`json:"date"`
	Lead		string		`json:"lead"`
}