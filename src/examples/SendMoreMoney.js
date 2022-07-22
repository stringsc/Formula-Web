/**
 *  @fileoverview Initiliazes the send more money example code
 */

const sendMoreMoney = () => {
  return `domain Money
{
	Send ::= new (s: Integer, e: Integer, n: Integer, d: Integer).
	More ::= new (m: Integer, o: Integer, r: Integer, e: Integer).
	Money ::= new (m: Integer, o: Integer, n: Integer, e: Integer, y: Integer).

	goodSend :- s is Send, s.s >= 0, s.s <= 9, s.e >= 0, s.e <= 9, s.n >= 0, s.n <= 9, s.d >= 0, s.d <= 9.
	goodMore :- m is More, m.m >= 0, m.m <= 9, m.o >= 0, m.o <= 9, m.r >= 0, m.r <= 9, m.e >= 0, m.e <= 9.
	goodMoney :- m is Money, m.m >= 0, m.m <= 9, m.o >= 0, m.o <= 9, m.n >= 0, m.n <= 9, m.e >= 0, m.e <= 9, m.y >= 0, m.y <= 9.

	goodSolution :- send is Send, more is More, money is Money,
					1000 * send.s + 100 * send.e + 10 * send.n + send.d +
					1000 * more.m + 100 * more.o + 10 * more.r + more.e =
					10000 * money.m + 1000 * money.o + 100 * money.n + 10 * money.e + money.y,
					send.s != send.e,
					send.s != send.n,
					send.s != send.d,
					send.e != send.n,
					send.e != send.d,
					send.n != send.d,
					more.m != more.o,
					more.m != more.r,
					more.m != more.e,
					more.o != more.r,
					more.o != more.e,
					more.r != more.e,
					money.m != money.o,
					money.m != money.n,
					money.m != money.e,
					money.m != money.y,
					money.o != money.n,
					money.o != money.e,
					money.o != money.y,
					money.n != money.e,
					money.n != money.y,
					money.e != money.y,
					send.s != money.y,
					send.s != more.r,
					send.d != more.r,
					send.e = more.e,
					send.n = money.n,
					more.m = money.m,
					more.o = money.o,
					more.e = money.e,
					more.m != 0.

	conforms goodSend, goodMore, goodMoney, goodSolution.
}

partial model pm of Money
{
	Send(s, e, n, d).
	More(m, o, r, e).
	Money(m, o, n, e, y).
}
`;
};

exports.sendMoreMoney = sendMoreMoney;
