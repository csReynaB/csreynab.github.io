---
title: "A toolkit for antibody profiling"
description: "Reproducible workflows for turning large antibody datasets into disease classifiers and survival models."
category: "Scientific software"
image: "workflow-traces.webp"
imageAlt: "A green illustration of parallel paths merging and diverging through a workflow."
weight: 2
context: "Medical University of Vienna"
role: "Software development"
methods: ["Python", "Nextflow", "XGBoost", "SHAP"]
resources:
  - label: "phipflow on GitHub"
    url: "https://github.com/csReynaB/phipflow"
    icon: "github"
  - label: "phipml on GitHub"
    url: "https://github.com/csReynaB/phipml"
    icon: "github"
  - label: "phipsurv on GitHub"
    url: "https://github.com/csReynaB/phipsurv"
    icon: "github"
---
## The question

When an antibody profile contains hundreds of thousands of peptide measurements, how do you test which signals carry information about disease and let another team reproduce the analysis?

## My contribution

I built **phipflow**, a Nextflow workflow that runs serological analyses and generates Quarto reports in a consistent computing environment. I developed **phipml** for disease classification and **phipsurv** for time-to-event outcomes. Together, the tools cover analysis, evaluation, and interpretation.

## How the models are evaluated

The Python workflows support nested cross-validation so that feature selection and model tuning take place inside the training data. SHAP summaries help researchers inspect which features contribute to predictions. Each repository includes its own configuration and usage examples.
