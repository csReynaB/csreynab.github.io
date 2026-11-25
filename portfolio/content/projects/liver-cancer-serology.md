---
title: "Immune signatures in liver cancer"
description: "Comparing blood antibody profiles across 257 participants to investigate signatures of liver disease."
category: "Clinical research"
image: "immune-matrix.webp"
imageAlt: "Illustration of a clustered antibody heatmap in shades of plum and coral."
weight: 1
context: "Medical University of Vienna"
role: "Computational analysis · Co-first author"
methods: ["PhIP-Seq", "Machine learning", "Survival analysis"]
resources:
  - label: "Analysis repository"
    url: "https://github.com/csReynaB/HCC-MUW"
    icon: "github"
  - label: "Archived release on Zenodo"
    url: "https://doi.org/10.5281/zenodo.22656008"
    icon: "archive"
---
## The question

Can a blood sample tell us which antibody responses distinguish liver cancer from cirrhosis? With clinicians and immunologists in Vienna, I also studied whether those responses were associated with survival after treatment.

## My contribution

I developed the computational analyses for 257 participants, comparing antibody profiles from 108 people with liver cancer, 77 with cirrhosis, and 72 healthy controls. I used nested cross-validation to evaluate disease classification, then fitted survival models in treatment cohorts and examined which peptide signals contributed to the predictions.

## What you can explore

The public repository pairs processed peptide-enrichment matrices with the R and Python workflows behind the analysis. It includes the group comparisons, model configurations, and notebooks used for the manuscript. The accompanying manuscript is under review.
