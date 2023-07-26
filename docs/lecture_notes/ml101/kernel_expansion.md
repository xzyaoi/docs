# Expansion and Kernel Methods

We can perform expansions in higher dimensions. For example, we can expand the simple linear models $\psi(x)=[1,x_1,x_2]^T$ into quadratic form $\psi(x)=[1,x_1,x_2,x_1^2,x_2^2,x_1x_2]^T$. By doing so, we are still fitting linear models, but with more, higher-dimensional features.

Using degree $d$ polynomials in $k$ dimensions results in $O(k^d)$ features.

We can use **kernels** as the features. For some expansions, a kernel computes the dot product, i.e. $\kappa(x',x):\mathcal{X}\times\mathcal{X}\to\mathbb{R}, \kappa(x',x)=\phi(x')\cdot\phi(x)$.

Some examples of kernels:

* Polynomial kernel: $\kappa_{\text{poly}}(x',x)=(x\cdot x'+\theta)^{d}$.
* Radial Basis Function (RBF) kernel: $\kappa_{\text{RBF}}(x',x)=\text{exp}(-\gamma||x-x'||^2)$.

**<u>Polynomial Kernel</u>**

The polynomial kernel is defined as 
$$
\kappa_{\text{poly}}(x',x)=(x\cdot x'+\theta)^{d}
$$
Since we have the binomial expansion as
$$
(z_1+\cdots+z_k)^d=\sum_{n_i\geq0, \sum_i n_i=d} \frac{d!}{n_1!\cdots n_k!}z_1^{n_1}\cdots z_k^{n_k}
$$
Let $C$ represents the number of ways to distribute $d$ balls into $k$ bins, where the $j$-th bin holds $n_j\geq 0$ balls. Assume that $z_i=x_ix_i'$ in the above binomial expansion. Then we have
$$
(xx')^d=\sum_{n_i\geq0, \sum_i n_i=d} \sqrt{C(d;n_1,\cdots,n_k)}x_1^{n_1}\cdots x_k^{n_k}\sqrt{C(d;n_1,\cdots,n_k)}(x_1')^{n_1}\cdots(x_k')^{n_k}
$$
where $\sum_{n_i\geq0, \sum_i n_i=d}$ is the dimension of $\phi_{\text{poly}}$, $\sqrt{C(d;n_1,\cdots,n_k)}x_1^{n_1}\cdots x_k^{n_k}$ is one row in $\phi_{\text{poly}}(x)$ and $\sqrt{C(d;n_1,\cdots,n_k)}(x_1')^{n_1}\cdots(x_k')^{n_k}$ is one row in $\phi_{\text{poly}}(x')$.

The dimension of the vector $\phi_{\text{poly}}(x)$ and $\phi_{\text{poly}}(x')$ is $O(k^d)$.

The complexity for computing $\kappa(x',x)$ is $O(k^d)$ using $\phi_{\text{poly}}$ vs. $O(k\text{log}d)$ using $(xx')^d$.

**<u>RBF Kernel</u>**

A radial basis function (RBF) kernel is defined as 
$$
\kappa_{\text{RBF}}(x',x)=\text{exp}(-\gamma||x-x'||^2)=\frac{1}{e^{\gamma||x-x'||^2}}
$$
The hyperparameters in RBF kernel are the width $\gamma$ and the centres $x'$.

RBF acts as a similarity measurement between $x$ and $x'$: $\kappa(x',x)\in(0,1]$.

* If $\gamma||x-x'||\to\infty$, then $\kappa_{\text{RBF}}(x',x)\to0$. This happens when $x$ and $x'$ are far apart (large distance) or $\gamma$ is very large.
* If $\gamma||x-x'||\to0$, then $\kappa_{\text{RBF}}(x',x)\to1$. This happens when $x$ and $x'$ are close (small distance) or $\gamma$ is very small.

Since we have 
$$
||x-x'||^2=<x-x',x-x'>=<x,x>+<x',x'>-2<x,x'>\\
=||x||^2+||x'||^2-2xx'
$$
and  
$$
\text{exp}(x,x')=\sum_{k=0}^{\infty}\frac{1}{k!}(xx')^k
$$
and the taylor expansion:
$$
\text{exp}(z)=\sum_{k=0}^\infty\frac{z^k}{k!}
$$
Without loss of generality, assume $\gamma=1$, then we have
$$
\text{exp}(-\gamma||x-x'||^2)=\sum_{k=0}^{\infty}(\sqrt{\frac{1}{k!}}\text{exp}(-||x||^2)\phi_\text{poly}(x))(\sqrt{\frac{1}{k!}}\text{exp}(-||x'||^2)\phi_\text{poly}(x'))
$$
in which $(\sqrt{\frac{1}{k!}}\text{exp}(-||x||^2)\phi_\text{poly}(x))$ is the $k$-th row in $\phi_\text{RBF}(x)$ and $(\sqrt{\frac{1}{k!}}\text{exp}(-||x'||^2)\phi_\text{poly}(x'))$ is the $k$-th row in $\phi_\text{RBF}(x')$.

Note that $\phi_\text{RBF}:\mathbb{R}^d\to\mathbb{R}^{\infty}$ projects vectors into an infinite dimensional space, and hence it is not feasible to compute $\kappa_\text{RBF}(x',x)$ using $\phi_\text{RBF}$.

**<u>Linear Model with RBF Kernel</u>**

First we choose centres $\mu_1,\cdots,\mu_M$, and then the feature maps become
$$
\psi_\text{RBF}(x)=[1,\kappa_\text{RBF}(\mu_1,x),\cdots,\kappa_\text{RBF}(\mu_M,x)]
$$
where we have
$$
\kappa_\text{RBF}(x',x)=\text{exp}(-\gamma||x-x'||^2)
$$
Then the output from a linear model is 
$$
y=w_0+\sum_{i=1}^Mw_i\kappa_\text{RBF}(\mu_1,x)+\epsilon=w\psi(x)+\epsilon
$$
When choosing hyperparameters:

* The data points themselves can be centres.
* For the width parameter, overfitting or underfitting may occur.
  * If the kernel is too narrow ($\gamma$ is too large), then overfitting occurs.
  * If the kernel is too wide ($\gamma$ is too small), then underfitting occurs.

The choice for width parameter is similar with the choice for degree in polynomial basis expansion.

**<u>Generalization of Machine Learning</u>**

The fundamental goal of machine learning is to generalize beyond the examples in the training set. Hence the test data is highly important, but the data along is not enough.

* Every learner must embody knowledge/assumptions beyond the data.
* No free lunch: no learner can beat random guessing over all possible functions to be learned.
* Hope: Functions to learn in the real world are not drawn uniformly from the set of all mathematically possible functions.
* Reasonable assumptions: similar examples have similar classes; limited dependencies; limited complexity.

**<u>Bias-Variance Tradeoff</u>**

Having high bias means that we are underfitting, while having high variance means we are overfitting. 

To combat overfitting, or high variance, there are several approaches:

* **Cross Validation**.
* **Regularisation** term to the evaluation function. It penalise models with more structure and favors smaller models with less room to overfit.
* **Statistical Significance Test**: like chi-square before adding new structure. It decide whether the prediction is different with or without this structure.

Avoiding overfitting may lead to high bias, a.k.a underfitting.