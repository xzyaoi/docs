
# Probability and Statistics

## Axioms of Probability Theory

- $P(E)\geq 0$.
- $P(\Omega)=1$
- For any sequence of mutually exclusive events $E_1, E_2, \cdots$, we have

$$P(\bigcup_{i=1}^{\infty} E_i)=\sum P(E_i)$$

We then have the following propositions:

- $P(E^c)=1-P(E)$
- $E\subset F \implies P(E)\leq P(F)$
- $P(E\cup F) = P(E)+P(F) - P(E\cap F)$

## Principles for Calculating

***Multiplication Principle***

Suppose that $r$ experiments are to be performed. If experiment $1$ has $n_1$ possible outcomes, and for each outcome of experiment $1$, experiment $2$ has $n_2$ possible outcomes, and so on so forth.  Then there is a total of 

$$n_1\times n_2\cdots\times n_r$$

possible outcomes for the $r$ experiments.

***Addition Principle***

Suppose that the set $S$ is partitioned into pairwise disjoint parts $S_1,S_2,\cdots, S_n$. The number of objects in $S$ can be determined by finding the number of objects in each of the parts, and adding the numbers so obtained.

***Substraction Principle***

Let $S$ be a set and $U$ be a larger set containing $S$. We denote by $A$ the set containing all elements in $U$ that are not in $S$. Then 

$$|S| = |U|-|A|$$

***Division Principle***

Let $S$ be a finite set that is partitioned in $k$ parts in such a way that each part contains the same number of objects. Then the number of parts in the partition is given by the rule 

$$k=\frac{|S|}{\text{number of objects in a part}}$$

## Permutations and Combinations

***Permutations***

Permutations are ordered arrangements of elements of a set. With $n$ objects, there are $n!$ permutations (we consider every object is different from all the others).

If $n_1$ are alike, $n_r$ are alike, then there are 

$$\frac{n!}{n_1!\times\cdots n_r!}$$

permutations of $n$ objects. Necessarily we have $\sum_{k}n_k \leq n$.

***Combinations***

The number of different groups of $k$ objects that can be formed from a total of $n$ objects is given by the choose function: 

$${n \choose k} = \begin{cases}\frac{n!}{k!(n-k)!} & 0\leq k\leq n \\ 0 & k<0 \lor k>n\end{cases}$$

***Multinomial Coefficients***

Let $n_1, \cdots n_k\in \mathbb{N}$, where $\sum n_i=n$. The number of possible partitions of $n$ objects into $k$ distinct groups of sizes $n_1, n_2,\cdots n_k$ is given by: 

$${n \choose {n_1, n_2, \cdots, n_k}} = \frac{n!}{n_1!\times n_2!\times\cdots\times n_k!}$$

## Conditional Probability

Let $A, B\subset S$ be two events, such that $P(A)>0$. The conditional probability of $B$ given $A$ is defined by 

$$P(B|A) = \frac{P(A\cap B)}{P(A)}$$

**Proposition**

- We fix an event $A$  with $P(A)>0$. The function $P(\cdot|A): S\to [0,1]$ which associates to any event $B\subset S$ the quantity $P(B|A)$ is a probability on the same sample space $S$.
- The **multiplication rule**: We assume that $A_1, \cdots, A_n$ are events such that $P(\cap_k A_k)>0$, then

$$P(A_1\cap \cdots \cap A_n)=P(A_1)P(A_2|A_1)P(A_3|A_2\cap A_1)\cdots$$

- **Bayes Formula**:

$$P(A|B) = \frac{P(A)}{P(B)}P(B|A)$$

- **Another form of Bayes**: If $A$ and $B$ are two events, then

$$P(B) = P(B|A)P(A) + P(B|A^c)(1-P(A))$$

- **Total Probability Law (extended Bayes Formula)** The Bayes formula can be generalised as follows. We assume that $A_1, \cdots A_n$ are mutually disjoint events such that $\cup_{k=1}^{n}A_k = S$ (such a sequence is called a partition of $S$). Then we have

$$P(B)=\sum_{k=1}^{n}P(B|A_k)P(A_k)$$

- **Another form of TPL**, suppose the sample space $S$ is divided into 3 disjoint events $B_1, B_2, B_3$. Then for any event $A$ we have:

$$P(A) = P(A\cap B_1) + P(A\cap B_2) + P(A\cap B_3)$$

### Independence

***Definition:*** Two events $A$ and $B$ are independent if 

$$P(A\cap B) = P(A)P(B)$$

Events $A$ and $B$ are independent if the probability that one occurred is not affected by knowledge that the other occurred. Formally, if $P(A)$ and $P(B)$ are not $0$,

$$P(A|B) = P(A) \\ P(B|A)=P(B)$$

**Proposition** If $E$ and $F$ are independent, so are $E$ and $F^c$.

### Independence of Several Events

***Definition*** A sequence of events $A_k$ are mutually independent if for any subset $\{A_{i_1}, A_{i_2}, \cdots A_{i_m}\} \subset \{A_1, \cdots A_n\}$ where $2\leq m\leq n$: 

$$P(\cap_{k=1}^m A_{i_k})=P(A_{i_1})\cdots P(A_{i_m})$$


## Random Variables

***Definition*** A **random variable** is a real-valued function on the sample space such that 

$$X: S\to\mathbb{R} s\to X(s), \forall s\in S$$

- A r.v. $X$ is a **discrete random variable** if there exists a countable set $K\subset \mathbb{R}$ such that $P(X\in K)=1$.
- Let $X$ be a discrete random variable, its probability mass function (PMF) is a real map $P_X$, defined by

$$P_X:\mathbb{R}\to\mathbb{R}, P_X(x)=P(X=x), \forall x\in\mathbb{R}$$

### Expectation and Variance

***Definition*** Consider a discrete random variable $X: S\to\mathbb{R}$ with $X(S)=\{r_1,\cdots,r_n\}$. Then

- The expected value of X (expectation or mean value) is defined as

$$E[X]=\sum_{k=1}^n r_kP(X=r_k)$$

- The variance of X, denoted by $Var(X)$, is defined as

$$Var(X) = E[X^2]-E[X]^2 \\ = \sum_{k=1}^n (r_k)^2P(X=r_k)-(\sum_{k=1}^n r_kP(X=r_k))^2$$

- The square root of the variance is called the standard deviation of $X$ and is denoted by $\sigma_X=\sqrt{Var(X)}$.

### Deluge of Discrete Distributions

**Bernoulli Distribution** $X$ is $1$ on success and $0$ on failure, with success and failure defined by the context.

**Binomial Distribution**, denoted by $Bin(n,p)$, models the number of success in $n$ independent $Bernoulli(p)$ trials.

**Hypergeometric Distribution** A hypergeometric random variable $X$ with parameters $n, M, m$ is a random variable that counts the number of elements in a random sample of size $n$, taken *without replacement* from a population of size $M$, having a specified attribute, where exactly $m$ members of the total population possessing the attribute. We denote $X\sim H(n,N,m)$.

**Geometric Distribution** models the number of tails before the first head in a sequence of coin flips or more generally, Bernoulli trials.

*Memoryless Property of Geometric Distribution* A random variable $X\sim G(p)$ has the **lack-of-memory** property, i.e. 

$$P(X=n+k|X>n) = P(X=k), \forall n,k\in\mathbb{N}$$

**Poisson Distribution** A discrete random variable $X$ is a Poisson random variable with parameter $\lambda >0$ if its probability mass function is given by 

$$P_X(x)=\begin{cases}e^{-\lambda}\frac{\lambda^x}{x!} & x=0,1,\cdots \\ 0 & \text{otherwise}\end{cases}$$

- The function $P_X$ is indeed a probability mass function, by allowing all the axioms.
- The Poisson distribution is considered to be the law of rare events. Poisson random variables often arise in the modelling of the frequency of occurrence of a certain event during a specified period of time.

## Continuous Random Variable

**Definition** A random variable $X$ is called a continuous random variable if $P(X=x)=0$  for all $x\in\mathbb{R}$.

**Definition** Let $X$ be a random variable, then the cumulative distribution function of $X$ is the map $F_X: \mathbb{R}\to\mathbb{R}$ defined by 

$$F_X(a) = P(X\leq a)$$

for all $a\in\mathbb{R}$.

**Proposition** Let $X$ be a random variable, then $F_X$ satisfies the following properties:

- $F_X$ is non-decreasing.
- $F_X$ is right continuous, i.e. $F(x+0)=F(x)$.
- $F_X(-\infty) := \lim_{a\to-\infty} F_X(a)=0$.
- $F_X(\infty) := \lim_{a\to\infty}F_X(a)=1$.

Note that, while being continuous from the right, a CDF $F_X$ is not left-continuous in general. In particular, the left limit of $F_X$ at $a$ can be defined as 

$$F_X(a-):=\lim_{t\to a}F_X(t)=P(X<a)$$

**Propositions** For all $a,b\in\mathbb{R}$, $a<b$, the following hold

- $P(a<X\leq b)=F_X(b)-F_X(a)$
- $P(a\leq X\leq b)=F_X(b)-F_X(a-)$
- $P(a<X<b) = F_X(b-)-F_X(a)$
- $P(a\leq X<b)=F_X(b-)-F_X(a-)$

**Proposition** A random variable is continuous if and only if its CDF is a continuous function.

### Density

**Definition** Let $X$ be a continuous random variable.

- If there exists a non-negative function $f_X:\mathbb{R}\to\mathbb{R}$ such that for all $a,b\in\mathbb{R}$, $a<b$, then $f_X$ is called a **Probability Density Function** of $X$ if

$$P(a\leq X\leq b)=\int_{a}^b f_X(x)dx$$

- If the distribution of $X$ has a PDF, we say that $X$ is an absolutely continuous random variable.

**Remarks** The density $f_X(x)$ of an absolutely continuous random variable is the analogue of the probability mass function $p_X(x)$ of a discrete random variable. The important differences are

- Unlike $p_X(x)$, the PDF $f_X(x)$ is not a probability. You have to integrate it to get a probability.
- Since $f_X(x)$ is not a probability, there is no restriction that $f_X(x)$ be less than or equal to $1$.

**Proposition** A continuous random variable $X$ has a PDF if and only if there exists a non-negative function $f: \mathbb{R}\to\mathbb{R}$ such that 

$$F_X(a)=\int_{-\infty}^a f(x)dx, \: \forall a\in\mathbb{R}$$

In this case, $f$ is a PDF of $X$. In the meanwhile,  for all $x\in\mathbb{R}$ where $f$ is continuous, $f(x)=F_X'(x)$.

**Procedure** Given a random variable $X$, there is a procedure for finding a PDF.

- Check for continuity of $F_X$. If it holds, proceed with the next step.
- Check at which points $F_X'$ exists.
- If $F_X'$ exists and is continuous outside a finite or countable subset of the real line, that is, if $\mathbb{R}-A$ is at most countable, where $A=\{x\in\mathbb{R}: \exists F_X'(x) \text{ is continuous}\}$, then define $f_X(x)=F'_X(x)$ for all $x\in A$.

**Proposition** Once we have a PDF of a random variable, we are able to compute any probability depending on that random variable. Let $X$ be an absolutely continuous random variable, then 

$$P(X\in A)=\int_{A} f(x)dx, \forall A\subset \mathbb{R}$$

**Remark** Let $f$ be a PDF, then we have 

$$\int_{\infty}^{\infty} f(x)dx=1$$

If $f:\mathbb{R}\to\mathbb{R}$ is a non-negative function satisfying the equality above, then $f$ is a PDF. We can therefore construct a PDF starting from any real map that is either positive or negative, and that has finite non-zero integral on $\mathbb{R}$.

Let $g: \mathbb{R}\to\mathbb{R}$ such that $g$ does not change sign and 

$$\int_{\mathbb{R}}g(x)dx=c\in\mathbb{R}-\{0\}$$

then we can define a function $f:\mathbb{R}\to\mathbb{R}$ by $f(x)=\frac{1}{c}g(x)$ for all $x\in\mathbb{R}$. $f$ is then a PDF.

#### Expectation and Variance

**Definition** Let $X$ be an absolutely continuous random variable, then

- The expectation, or expected value, or mean, of $X$ is denoted by $E[X]$ and defined by

$$E[X]=\int_{-\infty}^{\infty} xf_X(x)dx$$

- The variance of $X$ is defined by

$$Var(X)=E[X^2]-E[X]^2$$

- The standard deviation is defined as

$$\sigma(X)=\sqrt{Var(X)}$$

**Proposition** If $g$ is a function such that 

$$E[g(x)] = \int_{\infty}^{\infty}g(x)f_X(x)dx$$

It follows that 

$$E[a+bX]=a+bE[X]$$

#### **Exponential Distribution**

**Exponential Distribution** are the continuous analogue of geometric random variables. It is also related to Poisson random variables, in that they describe the time passed between consecutive occurrences of a certain event.

*Memoryless* Suppose that the probability that a taxi arrives within the first five minutes is $p$. If I wait 5 minutes and in fact no taxi arrives, then the probability that a taxi arrives within the next 5 minutes is still $p$.

The memorylessness of the exponential distribution is analogous to the memorylessness of the discrete geometric distribution, where having flipped 5 tails in a row gives no information about the next 5 flips. Indeed, the exponential distribution is the precisely the continuous counterpart of the geometric distribution, which models the waiting time for a discrete process to change state.

*Proposition* A positive continuous random variable $X$ has the lack-of-memory property, i.e 

$$P(X>s+t| X>s) = P(X>t), \forall s,t\in\mathbb{R}, 0\leq s\leq t$$

if and only if $X$ is exponentially distributed.

#### **Normal Distribution**

**Standard Normal Distribution** The standard normal distribution $\mathcal{N}(0,1)$ has the mean $0$ and the variance $1$. We use

$$\varphi(z)=\frac{1}{\sqrt{2\pi}}e^{-\frac{z^2}{2}}$$

for the standard normal density (PDF) , and 

$$\Phi(z)=\int_{-\infty}^z \varphi(x)dx$$

for the standard normal distribution (CDF).

**Other Normal Distribution** The normal distribution $\mathcal{N}(\mu,\sigma^2)$ has the following normal density (PDF) 

$$f_X(x)=\frac{1}{\sqrt{2\pi\sigma^2}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

*Proposition* If $X\sim\mathcal{N}(\mu, \sigma^2)$  and $Y=aX+b$, then $Y\sim \mathcal{N}(a\mu+b, a^2\sigma^2)$.

*Proposition* If $X\sim \mathcal{N}(\mu, \sigma^2)$, then $Z:=\frac{x-\mu}{\sigma}\sim\mathcal{N}(0,1)$.

#### Laplace Limit Theorem

Let $S_n$ denote the number of successes that occur when $n$ independent trials, each resulting in a  success with probability $p$, are performed. Then for any $a<b$, 

$$\lim_{n\to\infty}P(a\leq \frac{S_n-np}{\sqrt{np(1-p)}}\leq b)=\Phi(b)-\Phi(a)$$

We define the standardised sum as 

$$Z_n:= \frac{S_n-np}{\sqrt{np(1-p)}}$$


#### Distribution of Function of a Random Variable

**Theorem** Let $X$ be a absolutely continuous random variable and 

$$Y=g(X)$$

where $g(X)$ is a strictly monotone and differentiable function. Then the density function of $Y$ is given by 

$$f_Y(y)=\begin{cases}f_X(g^{-1}(y)) \times |\frac{d}{dy}g^{-1}(y)| & y=g(x)\text{ for some x}\\ 0 & \text{otherwise}\end{cases}$$

**Procedure** Two-step procedure

- Find the CDF of $Y$ as

$$F_Y(y)=P(Y\leq y) = P(g(X)\leq y)$$

- Differentiate

$$f_Y(y)=\frac{dF_Y}{dy}(y)$$

## Joint Distributions

**Discrete Joint PMF** Suppose $X$ takes values $\{x_1, x_2, \cdots, x_n\}$ and $Y$ takes values $\{y_1, y_2, \cdots, y_m\}$. The ordered pair $(X, Y)$ takes values in the product $\{(x_1, y_1), (x_1, y_2), \cdots (x_n, y_m)\}$. The joint probability mass function (joint PMF) of $X$ and $Y$ is the function $P_{X, Y}(x_i, y_j)$ giving the probability of the joint outcome $\{X=x_i, Y=y_j\}$. We can organise this in a joint probability table.

*Properties* The probability mass function (PMF)

- $0\leq P_{X, Y}(x_i, y_j)\leq 1$.
- The total probability is $1$, $\sum_{i=1}^n\sum_{j=1}^m P_{X,Y}(x_i, y_j)=1$.
- Computing Probabilities: for any $A\subset \{1, \cdots, n\}\times \{1, \cdots, m\}$, we have $P((X, Y)\in A) = \sum_{(x,y)\in A} P_{X,Y}(x, y)$.

**Continuous Joint Distributions** $X$ takes values in $[a,b]$, $Y$ takes values in $[c,d]$, then $(X, Y)$ takes values in $[a,b]\times [c,d]$. The joint PDF is denoted as $f(x,y)$.

*Properties* The probability density function (PDF

- $0\leq f_{X,Y}(x,y)$.
- Total probability is $1$, $\int_{y\in\mathbb{R}}\int_{x\in\mathbb{R}} f_{X, Y}(x, y)dxdy = 1$.
- Computing probabilities, for any $x_1\leq x_2$ and $y_1\leq y_2$, we calculate the probability by

$$P(x_1\leq X\leq x_2, y_1\leq Y\leq y_2) = \int_{y\in[y_1, y_2]}\int_{x\in[x_1, x_2]} f_{X, Y}(x,y)dxdy$$

### Marginal PMF and PDF

**Discrete Case** Let $X, Y$ be discrete random variables defined on the same sample space, then 

$$P_X(x)=\sum_{y\in\mathbb{R}}P_{X,Y}(x, y), \forall x\in\mathbb{R}$$

and analogously, 

$$P_Y(y)=\sum_{x\in\mathbb{R}}P_{X, Y}(x,y), \forall y\in\mathbb{R}$$

**Continuous Case** Let $X,Y: S\to\mathbb{R}$ be continuous random variables with a joint PDF. Then the marginal densities are given by 

$$f_X(x) = \int_{\mathbb{R}}f_{X, Y}(x,y)dy, \forall x\in\mathbb{R}$$

$$f_Y(y) = \int_{\mathbb{R}}f_{X, Y}(x,y)dx, \forall y\in\mathbb{R}$$

### Cumulative Distribution Function

**Definition** Let $X, Y$ be random variables defined on the same sample space $S$, the joint cumulative distribution function of $X$ and $Y$ is the map $F_{X, Y}:\mathbb{R^2}\to[0,1]$ defined by: for all $a,b\in\mathbb{R}$, 

$$F_{X,Y}(a,b)=P(X\leq a, Y\leq b)$$

*Discrete Case* 

$$F_{X,Y}(a,b) = \sum_{x\leq a}\sum_{y\leq b}P_{X,Y}(x,y)$$

*Continuous Case* 

$$F_{X,Y}(a,b) = \int_{-\infty}^b\int_{-\infty}^a f_{X,Y}(x,y)dxdy$$

$$f_{X,Y}(x,y)=\frac{\partial^2F_{X,Y}}{\partial x\partial y}(x,y)$$

**Properties** 

- $F(x,y)$ is non-decreasing. That is, as $x$ or $y$ increases $F(x,y)$ increases or remains constant.
- $F(x,y)=0$ at the lower left of its range. If the lower left is $(-\infty, \infty)$, then this means

$$\lim_{(x,y)\to (-\infty,-\infty)}F(x,y)=0$$

- $F(x,y)=1$ at the upper right of its range.

### Independence

**Definition** The random variables $X$ and $Y$ are independent, if for any two sets $A\subset\mathbb{R}$ and $B\subset \mathbb{R}$, the events $\{X\in A\}$ and $\{Y\in B\}$ are independent.

If $X$ and $Y$ are independent, then

- *Discrete random variables* The joint probability mass function is a product of the marginal probability mass functions

$$P_{X,Y}(x,y)=P_X(x)P_Y(y)$$

- *Continuous random variables* The joint probability density function is a product of the marginal probability density functions

$$f_{X,Y}(x,y)=f_X(x)f_Y(y)$$

### Sums of Independent Random Variable

**Discrete Case of 2 Variables** The distribution $Z=X+Y$, in discrete case, we have 

$$P_Z(z)=\sum_x P_X(x)P_Y(z-x)$$

**Continuous Case of 2 Variables** The distribution $Z=X+Y$, in continuous case, we have 

$$f_Z(z)=\int_{-\infty}^{\infty}f_X(x)f_Y(z-x)dx$$

### Conditional Distributions

**Discrete Case** The conditional probability mass function of $X$, given $\{Y=y\}$ is defined as 

$$P_{X|Y}(x|y)=\frac{P_{X,Y}(x,y)}{P_Y(y)} \: x\in X(s)$$

*Properties* 

- $0\leq P_{X|Y}(x_i|y)\leq 1$, for all $x_i\in X(S)$.
- The total probability is $1$, i.e.

$$\sum_{x_i\in X(S)}P_{X|Y}(x_i)=1$$

- Computing probabilities, for any $A\subset X(S)$, we have

$$P(X\in A| Y=y)=\sum_{x\in A}P_{X|Y}(x|y)$$

**Continuous Case** The conditional density mass function of $X$ given $\{Y=y\}$, called the jointly continuous random variables, is defined as 

$$f_{X|Y}(x|y)=\frac{f_{X,Y}(x,y)}{f_Y(y)}$$

*Properties* 

- $0\leq f_{X|Y}(x|y)$
- The total probability is $1$, i.e.

$$\int_{x\in\mathbb{R}}f_{X|Y}(x|y)dx=1$$

- Computing probabilities, for any $x_1\leq x_2$ and $y_1\leq y_2$, we have

$$P(x_1\leq X\leq x_2| Y=y)=\int_{x\in[x_1, x_2]}f_{X|Y}f(x|y)dx$$

### Joint PDF for functions of random variables

**Theorem** Let $X_1$ and $X_2$ be random variables, the joint density function $f_{X_1,X_2}$, and $Y_1=g_1(X_1, X_2)$ and $Y_2=g_2(X_1, X_2)$. If:

- The following equations have unique solutions, say $x_1=h_1(y_1, y_2)$ and $x_2=h_2(y_1, y_2)$.

$$\begin{cases}y_1=g_1(x_1, x_2)\\ y_2=g_2(x_1, x_2)\end{cases}$$

- $g_1$ and $g_2$ have continuous partial derivatives and $J(x_1, x_2):=\frac{\partial g_1}{\partial x_1}\frac{\partial g_2}{\partial x_2}-\frac{\partial g_1}{\partial x_2}\frac{\partial g_2}{\partial x_1}\neq 0$ at all points $(x_1, x_2)$.

Then, $Y_1$ and $Y_2$ are jointly continuous, with density function given by 

$$f_{Y_1, Y_2}(y_1, y_2)=f_{X_1, X_2}(x_1, x_2)|J(x_1, x_2)|^{-1}$$

where $x_1=h_1(y_1, y_2)$ and $x_2=h_2(y_1, y_2)$.


**Expectations of Functions of 2 Random Variables**

Let $g$ be  a function of two variables. If $X$ and $Y$ have a joint probability mass function $P_{X, Y}(x,y)$ such that 

$$E[g(X,Y)]=\sum_x\sum_y g(x,y)P_{X,Y}(x,y)$$

If $X$ and $Y$ have a joint probability density function $f_{X,Y}(x,y)$: 

$$E[g(X,Y)]=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x,y)f_{X,Y}(x,y)dxdy$$

**Linearity of the Expectation**

Choosing $g(x,y)=x+y$ and using induction, we can show 

$$E[X_1+\cdots+X_n]=\sum_{k=1}^n E[X_k]$$

Choosing $g(x,y)=ax+by$ for $a,b\in\mathbb{R}$: 

$$E[aX+bY]=aE[X]+bE[Y]$$

and by induction: 

$$E[\sum_{i=1}^na_iX_i]=\sum_{i=1}^n a_iE[X_i]$$

### Covariance and Correlation

**Definition**

The ***covariance*** between $X$ and $Y$ is 

$$Cov(X,Y)=E[(X-E[X])(Y-E[Y])]$$

The correlation coefficient is defined as 

$$Corr(X, Y)=\frac{Cov(X,Y)}{\sqrt{Var(X)Var(Y)}}$$

**Properties of Covariance**

- $Cov(X,X)=Var(X)$
- $Cov(X,Y)=Cov(Y,X)$
- $Cov(aX, Y)=aCov(X,Y)=Cov(X, aY)$
- If $X$ and $Y$ are independent, then $Cov(X,Y)=0$ and $Corr(X,Y)=0$.

*Note*: The converse is not true, if the covariance is $0$, the variables may not be independent.

**Properties of Correlation**

- $Corr(X,Y)$ is the covariance of the standardised versions of $X$ and $Y$.
- $Corr(X, Y)$ is dimensionless, i.e. it is a ratio.
- $-1\leq Corr(X,Y)\leq 1$
- $Corr(X,Y)=1$ if and only if $Y=aX+b$ with $a>0$.
- $Corr(X,Y)=-1$ if and only if $Y=aX+b$ with $a<0$.

**Proposition**

$$Cov(\sum_{i=1}^nX_i, \sum_{i=1}^mY_i)=\sum_{i=1}^n \sum_{i=1}^m Cov(X_i, Y_j)$$

$$Var(\sum_{i=1}^n X_i)=\sum_{i=1}^n Var(X_i) + 2(\sum\sum)_{i<j}Cov(X_i, X_j)$$

### Conditional Expectation

**Jointly Discrete Case**

For $X$ and $Y$ discrete random variables, 

$$E[X|Y=y]=\sum_{k}kP(X=k|Y=y)$$

**Jointly Continuous Case**

For $X$ and $Y$ jointly continuous random variables, 

$$E[X|Y=y]=\int_{\mathbb{R}}xf_{X|Y}(x|y)dx$$

Note: The $E[X|Y]$ is a random variable, since its value depends on the realisation of $Y$. The same holds for $Var(X|Y)$. 

**Tower Property**

$$E[X]=E[E[X|Y]]$$

$$Var(E(Y|X))+E(Var(Y|X))=Var(Y)$$

## Large Numbers

### Markov's and Chebyshev's Inequality

**Markov's Inequality** Let $X$ be a random variable $X\geq 0$, then for all $a>0$, we have 

$$P(X\geq a)\leq \frac{E[X]}{a}$$

- Use a bit of information about a distribution to learn something a out probabilities of extreme values.
- If $X\geq0$ and $E[X]$ is small, then $X$ is unlikely to be very large.

**Chebyshev's Inequality** Let $X$ be a random variable with $\mu=E[X]< \infty$ and $\sigma^2=Var(X)<\infty$, then for all $k>0$, we have 

$$P(|X-\mu|\geq k)\leq \frac{\sigma^2}{k^2}$$

- Random variable $X$, with finite mean $\mu$ and variance $\sigma^2$.
- If the variance is small, then $X$ is unlikely to be too far from the mean.

### Weak Law of Large Numbers

- Intuitively, an expectation can be thought of as the average of the outcomes over an infinite repetition of the same experiment.
- If so, the observed average in a finite number of repetitions (which is called the sample mean) should approach the expectation, as the number of repetitions increases.
- This is a vague statement, which is made more precise by so-called laws of large numbers.

**Definition** Let $X_1, X_2, \cdots$ be a sequence of independent and identically distributed random variables, each having a finite mean $E[X_i]=\mu$, then for all $\epsilon>0$, we have 

$$P(|\frac{X_1+\cdots+X_n}{n}-\mu|\geq \epsilon)\to 0 \text{ as } n\to\infty$$

**Interpretation**

- One experiment:
    - many measurements, $X_i=\mu+W_i$
    - $W_i$: measurement noise. $E[W_i]=0$, independent $W_i$.
    - Sample mean $M_n$ is unlikely to be far off from the true mean $\mu$.
- Many independent repetitions of the same experiments.
    - Event $A$, with $P=P(A)$.
    - $X_i$ is the indicator of event $A$.
    - The sample mean $M_n$ is the empirical frequency of event $A$.
    - Empirical frequency is unlikely to be far of from true probability $P$.

### Central Limit Theorem

Let $X_1,X_2,\cdots$ be a sequence of independent and identically distributed random variables, each having a finite mean $E[X_i]=\mu$ and variance $\sigma^2$. Then for $a\in\mathbb{R}$: 

$$P(\frac{X_1+\cdots+X_n-n\mu}{\sigma\sqrt{n}})\to \frac{1}{\sqrt{2\pi}}\int_{-\infty}^a e^{\frac{-x^2}{2}}dx \text{ as }n\to\infty$$

**Different Scalings of the Sums of Random Variables**

- $X_1\cdots X_n$, i.i.d. random variables with finite $\mu$ and variance $\sigma^2$.
- $S_n=X_1+\cdots+X_n$ with the variance $n\sigma^2$.
- $\frac{S_n}{\sqrt{n}}=\frac{X_1+\cdots+X_n}{\sqrt{n}}$ with the variance $\sigma^2$.
- $Z_n=\frac{S_n-\mu n}{\sigma\sqrt{n}} = \frac{X_1+\cdots+X_n-\mu n}{\sigma\sqrt{n}}$ with the variance $1$ and the mean $0$.

**Usefulness of CLT**

- Universal and easy to apply, only means and variances matter.
- Fairly accurate computational shortcut.
- Justification of normal models.

### Strong Law of Large Numbers

The strong law of large numbers establishes almost sure convergence.

Let $X_1,X_2,\cdots$  be a sequence of independent and identically distributed random variables, each having a finite mean $E[X_i]=\mu$. Then, with probability 1, we have 

$$\frac{X_1+\cdots+E_n}{n}\to \mu \text{ as }n\to\infty$$