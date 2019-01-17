package chp03

type stackMethods interface {
	Push(int)
	Pop() (int, error)
	Peek() (int, error)
	IsEmpty() bool
	Min() int
}

type node struct {
	val  int
	prev *node
}

// Stack that records top node
type Stack struct {
	top *node
}

// Push will add to stack (LIFO)
func (s *Stack) Push(v int) {
	if s.top == nil {
		s.top = &node{val: v}
		return
	}
	s.top = &node{val: v, prev: s.top}
}

// Pop will remove from stack the last thing that was pushed in (LIFO)
func (s *Stack) Pop() {
	s.top = s.top.prev
}

// Peek value of the top item
func (s *Stack) Peek() int {
	return s.top.val
}
func (s *Stack) IsEmpty() bool {
	if s.top == nil {
		return true
	}
	return false
}

func (s *Stack) Min() int {

}

// func main() {
// 	// nn := node{val: 20, prev: &pn}
// 	S := Stack{}
// 	S.Push(2)
// 	S.Push(9)
// 	S.Push(6)

// 	fmt.Printf("%+v\n", S.top)
// 	fmt.Println(S.Peek())
// 	S.Pop()
// 	fmt.Println(S.Peek())
// 	fmt.Println(S.isEmpty())
// 	S.Pop()
// 	S.Pop()
// 	fmt.Println(S.isEmpty())

// }
