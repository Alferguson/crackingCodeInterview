package chp03

type queueMethods interface {
	Add(int)
	Remove() (int, error)
	Peek() (int, error)
	IsEmpty() bool
}

type item struct {
	val  int
	next *item
}

// Queue that records start item
type Queue struct {
	start *item
}

// Add an item to the end of the list
func (q *Queue) Add(v int) {
	ni := &item{val: v, next: nil}

	if q.start == nil {
		q.start = ni
		return
	}

	_iterateAdd(ni, q.start)
}
func _iterateAdd(ni *item, i *item) {
	if i.next == nil {
		i.next = ni
		return
	}
	_iterateAdd(ni, i.next)
}

// Remove first item of the list (FIFO)
func (q *Queue) Remove() {
	q.start = q.start.next
}

// Peek at top/last item added of Queue
func (q *Queue) Peek() int {
	if q.start.next != nil {
		_iteratePeek(q.start)
	}
	return q.start.val
}
func _iteratePeek(i *item) int {
	if i.next != nil {
		_iteratePeek(i.next)
	}
	return i.val
}

// isEmpty returns bool if it is empty
func (q *Queue) isEmpty() bool {
	if q.start == nil {
		return true
	}
	return false
}

// func main() {
// 	Q := Queue{}
// 	Q.Add(9)
// 	Q.Add(3)
// 	Q.Add(4)
// 	Q.Add(1)
// 	fmt.Println(Q.start)
// 	fmt.Println(Q.start.next)
// 	fmt.Println(Q.start.next.next)
// 	fmt.Println(Q.Peek())
// 	fmt.Println(Q.isEmpty())
// 	Q.Remove()
// 	fmt.Println(Q.Peek())
// }
