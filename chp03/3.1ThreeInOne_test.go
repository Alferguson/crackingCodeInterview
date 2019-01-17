package chp03

import (
	"fmt"
	"testing"
)

// Three in One: Describe how you could use a single array to implement three stacks.
func TestThreeInOne(t *testing.T) {
	threeArr := [20]int{3, 7, 9, 5, 2, 3, 4, 9, 8, 2, 4, 1, 5, 0, 5, 3, 7, 2, 1, 9}

	ta1 := threeArr[:7]
	ta2 := threeArr[8:14]
	ta3 := threeArr[15:20]
	fmt.Println(ta1)
	fmt.Println(ta2)
	fmt.Println(ta3)

	// to reverse the array
	for i, j := 0, len(ta3)-1; i < j; i, j = i+1, j-1 {
		ta3[i], ta3[j] = ta3[j], ta3[i]
	}

	S1 := Stack{}
	S2 := Stack{}
	S3 := Stack{}
	iterate(S1, ta1)
	iterate(S2, ta2)
	iterate(S3, ta3)
	fmt.Println(S1)
	fmt.Println(S2)
	fmt.Println(S3)
}

func iterate(s Stack, a []int) {
	for _, v := range a {
		s.Push(v)
		fmt.Println(s.Peek())
	}
}

// like this???
