package core

type CryptolabelError struct {
	IsCryptolabelError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCryptolabelError(code string, msg string, ctx *Context) *CryptolabelError {
	return &CryptolabelError{
		IsCryptolabelError: true,
		Sdk:              "Cryptolabel",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CryptolabelError) Error() string {
	return e.Msg
}
