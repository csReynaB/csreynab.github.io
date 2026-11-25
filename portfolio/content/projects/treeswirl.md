---
title: "Tracing ancestry with TreeSwirl"
description: "A statistical method for tracing how population ancestry varies along the genome."
category: "Population genomics"
image: "ancestry-tree.webp"
imageAlt: "Illustration of a radial branching tree in terracotta ink."
weight: 3
context: "University of Fribourg"
role: "Method development · Co-first author"
methods: ["C++", "Hidden Markov models", "Population genetics"]
resources:
  - label: "Read the paper"
    url: "https://doi.org/10.1093/molbev/msae137"
    icon: "book"
  - label: "TreeSwirl source code"
    url: "https://bitbucket.org/wegmannlab/treeswirl/"
    icon: "code"
---
## The question

When populations with different histories mix, ancestry can vary from one genomic region to the next. Can we reconstruct that variation from population allele frequencies while accounting for the fact that nearby positions are inherited together?

## My contribution

During my PhD, I co-developed TreeSwirl, a C++ implementation of a hidden Markov model for inferring local population mixtures. The method uses linked, genome-wide allele frequencies to estimate how the contributions of ancestral populations vary along a chromosome.

## Research output

Our co-first-author paper in *Molecular Biology and Evolution* describes the statistical model, its evaluation, and its application to human population data. The implementation is available on Bitbucket.
