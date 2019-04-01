// Unit 5 

// 1.	Покажите операции push(S,4) Push (S,1), Push (S,3), 
// Pop (S), Push (S,8) и Pop (S) на стеке реализованном с помощью массива S[…6]. 
// Первоначально стек пуст


function pushPopAlg (arr = []) {
    arr.push(4,1,3)
    arr.pop()
    arr.push(8)
    arr.pop()

    return arr
}

pushPopAlg()


// 2.	Как на базе одного массива А[1…n] реализовать две стека 
// суммарной длины не больше n? Операции Push Pop должны выполняться за время О[1]

// 3.	Следуя образцу рис 11.2 покажите работу операции Exqueue(Q,4), 
// Exqueue (Q,1), Exqueue (Q,4), Dexqueue (Q,1), Exqueue (Q,8) и Dexqueue (Q) 
// на очереди реализованной с помощью массива Q(1…5) Первоначально очередь пуста.

// 4.	Перепишите процедуры Exqueue  Dequeue, предусмотрев проверку на случаай 
// переполнения или underflow


// 5.	Exqueue (Q,1)Cntr позволяет добавлять и удалять элементы только с одного конца. 
// В очередь добавлять элементы можно только с одно конца а удалять – только с другого. 
// Структура данных на psdftvfz деком (Deque), позволяет добавлять и удалять элементы с обоих концов. 
// Реализуйте дек на базе массива таким образом чтобы операции добавления и удаления элемента с каждого концов занимало время О(1)


// 6.	Объясните как можно реализовать очередь на базе двух стеков. 
// Каково время работы Exqueue  Dequeue при такой реализации?

// 7.	Объясните, как реализовать стек на базе друх очередей. 
// Каково время работы стековых операций?
